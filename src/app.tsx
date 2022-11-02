import React from 'react'
import { createRoot } from 'react-dom/client'
import 'antd/dist/antd.css'
import { Button, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import addModalWrapper from '@/components/hoc/addModalWrapper'
import useModal from '@/hooks/useModal'
import Modal from '@/components/widgets/modal'
import { DialogProps } from '@/hooks/useModal/types'

const rootElem = document.querySelector('#root')
const root = createRoot(rootElem)

interface ISampleModalProps {
  name: string
}
function SampleModal(props: DialogProps<ISampleModalProps>) {
  return (
    <Modal
      visible={props.visible}
      onOk={() => props.onOK('Hello I am OK')}
      onCancel={() => props.onCancel('Hello I am CANCEL')}
    >
      Hello, my name is {props.name}
    </Modal>
  )
}

function Layout() {
  const { openModal } = useModal()

  return (
    <Button
      onClick={async () => {
        const result = await openModal<ISampleModalProps>(
          SampleModal,
          'for sample',
          {
            name: 'LHR',
          },
        )
        console.log('result', result)
      }}
    >
      Click Me
    </Button>
  )
}

const App = addModalWrapper(Layout)

root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
)
