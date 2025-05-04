import { Link } from 'react-router-dom'
import { ISlimTruck } from '../../../shared/api/models/trucks'
import { ROUTES } from '../../../shared/config/routes'

interface ISlimTruckProps {
  truck: ISlimTruck
}

export default function SlimTruckCard({ truck }: ISlimTruckProps) {
  return (
    <div className='border m-2.5 border-gray-800 rounded'>
      <div className='flex justify-center'>
        <img src={truck.image} alt='no image' className='h-40 rounded' />
      </div>
      <div className='px-2.5 text-center w-full py-1.5'>
        <h3>
          {truck.brandAndModel}
        </h3>
        <Link to={ROUTES.trucks.byIdGeneric(truck.id)}
          className='w-full border rounded border-blue-950 fill-blue-100 text-blue-950 block'>
          Показать эту малыху
        </Link>
      </div>
    </div>
  )
}
