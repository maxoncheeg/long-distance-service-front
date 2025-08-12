import { orderService, profileService } from '../../shared/config/services';

export function AwesomeTestPage() {

  //const [data, setData] = useState<IUserProfile | undefined>();

  const test = async () => {
    const response = await orderService.getSlimOrders(1, -1)

    //setData(response.data)
    console.log(response)
  }

  return (
    
    <button className='h-[300px] w-[400px] bg-amber-200 text-amber-950' onClick={test}>ТЕСТ</button>
  )
}
