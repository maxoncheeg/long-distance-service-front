import { useEffect, useState } from 'react'
import { Loader } from '../../shared/ui/loader/Loader'
import { ISlimTruck } from '../../shared/api/models/trucks'
import SlimTruckCard from '../../entities/ui/trucks/SlimTruckCard'
import { authService, truckService } from '../../shared/config/services'
import ErrorMessage from '../../shared/ui/errors/ErrorMessage'
import { IResponse } from '../../shared/api/responses/response'

export default function TrucksPage() {
	const [trucks, setTrucks] = useState<ISlimTruck[] | null>([])
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const getTrucks = async () => {
		setLoading(true)
		const response = await truckService.getSlimTrucks();

		if (response.success && response.data != null && response.data.length > 0) {
			setTrucks(response.data)
			setError('')
		}
		else if (!response.success) {
			setError(response.message + `${response.statusCode ?? ''}`)
		}
		else
			setError('')

		setLoading(false)
	}

	const request = async (response: IResponse<any>) => {
		if (!response.success) {
			setError(response.statusCode.toString() ?? 'какая то ошибочка')
		}
		else {
			setError('')
			console.log(response.data)
		}

	}

	useEffect(() => {
		getTrucks();
	}, [])

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}

			<button onClick={async () => request(await authService.login({ login: "boba", password: "1" }))} className='rounded border border-red-400'>LOGIN</button>
			<button onClick={async () => request(await authService.logout())} className='rounded border border-red-400'>LOGOUT</button>
			<button onClick={async () => request(await authService.pass("2"))} className='rounded border border-red-400'>PASS</button>
			<button onClick={async () => request(await authService.refreshToken())} className='rounded border border-red-400'>REFRESH</button>

			<div className='container flex justify-center'>
				<>
					{
						trucks && trucks.length > 0 && trucks.map(truck => (
							<SlimTruckCard key={truck.id} truck={truck} />
						))
					}
				</>
			</div>

		</div>
	)
}
