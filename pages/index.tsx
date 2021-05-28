import { Header } from '../components/Header'
import { Result } from '../components/Result'
import { Button } from '../components/Button'
import { ButtonTypeEnum } from '../models/buttonType'

export default function Home() {
  return (
    <div className="container mx-auto h-screen px-4">
      <div className="flex justify-center flex-col h-full">
        <div className="mb-4">
          <Header />
        </div>
        <Result result={300} />
        <div className="mt-4 p-8 bg-gray-700 rounded-xl grid grid-cols-4 gap-6">
          <div className="col-span-1">
            <Button text='7' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='8' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='9' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='DEL' buttonType={ButtonTypeEnum.PRIMARY} />
          </div>
          <div className="col-span-1">
            <Button text='4' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='5' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='6' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='+' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='1' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='2' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='3' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='-' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='.' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='0' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='/' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-1">
            <Button text='x' buttonType={ButtonTypeEnum.DEFAULT} />
          </div>
          <div className="col-span-2">
            <Button text='RESET' buttonType={ButtonTypeEnum.PRIMARY} />
          </div>
          <div className="col-span-2">
            <Button text='=' buttonType={ButtonTypeEnum.SECONDARY} />
          </div>
        </div>
      </div>
    </div>
  )
}
