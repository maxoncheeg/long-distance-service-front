import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { truckService } from '../../shared/config/services';
import { ITruck } from '../../shared/api/models/trucks';
import ErrorMessage from '../../shared/ui/errors/ErrorMessage';


export default function TruckByIdPage() {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [truck, setTruck] = useState<ITruck | null>(null);

    const { id } = useParams()
    const idNumber = Number(id)

    const getTruck = async () => {
        setLoading(true)

        if (Number.isNaN(idNumber)) {
            setError('Некорректный id')
            return
        }

        const response = await truckService.getTruckById(idNumber)
        if (response.success && response.data != null) {
            setTruck(response.data)
            setError('')
        }
        else if (!response.success) {
            setError(response.message + `(${response.statusCode ?? ''})`)
        }
        else
            setError('')

        setLoading(false)
    }

    useEffect(() => {
        getTruck()
    }, [])

    return (
        <div className='w-max text-center'>
            {error && <ErrorMessage error={error} />}
            <h2>Brand {truck?.brand}</h2>
            <h2>Model {truck?.model}</h2>
            <h2>Year {truck?.year}</h2>
            <h2>LicensePlate {truck?.licensePlate}</h2>
            <h2>Photo</h2>
            <img src={truck?.image} alt="none" />
        </div>
    )
}
