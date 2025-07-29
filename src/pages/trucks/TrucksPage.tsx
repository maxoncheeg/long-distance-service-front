import { Loader } from '../../shared/ui/loader/Loader'
import { ISlimTruck } from '../../shared/api/models/trucks'
import SlimTruckCard from '../../entities/ui/trucks/SlimTruckCard'
import ErrorMessage from '../../shared/ui/errors/ErrorMessage'
import { useEffect, useState } from 'react'
import { truckService } from '../../shared/config/services'

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


	useEffect(() => {
		getTrucks();
	}, [])

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			
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
