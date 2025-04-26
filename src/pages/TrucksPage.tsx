import React, { useContext, useEffect } from 'react'
import { CreateTruck } from '../components/CreateTruck'
import { ErrorMessage } from '../components/ErrorMessage'
import { Loader } from '../components/Loader'
import { Modal } from '../components/Modal'
import { Truck } from '../components/Truck'
import { ModalContext } from '../context/ModalContext'
import { useTrucks } from '../hooks/trucks'

export default function TrucksPage() {
    const { trucks, error, loading } = useTrucks()
    const {modal, open, close} = useContext(ModalContext)
  
    function onTruckCreated() {
      close()
  
      // запросить машинки заново
    }
  
    const modalClosed = () => {
      close()
    }
  
    useEffect(() => {
      open()
    }, [])
  
    return (
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader />}
        {error != '' && <ErrorMessage error={error} />}
  
        <div className='container flex justify-center'>
          <>
            {
              trucks.map(truck => (
                <Truck key={truck.id} truck={truck}></Truck>
              ))
            }
          </>
        </div>
  
        {modal &&
          <Modal title='Создать грузовик' onClose={modalClosed}>
            <CreateTruck onCreate={onTruckCreated} />
          </Modal>
        }
      </div>
    )
}
