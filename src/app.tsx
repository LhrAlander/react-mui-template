import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '@mui/material'

import { ThemeProvider } from '@mui/system'
import addModalWrapper from '@/components/hoc/addModalWrapper'
import { DialogProps } from '@/components/modal/types'
import useModal from '@/hooks/useModal'
import Modal from '@/components/modal'
import theme from '@/common/theme'
import Typography from '@/components/widgets/typography'

const rootElem = document.querySelector('#root')
const root = createRoot(rootElem)

interface ISampleModalProps {
  name: string
}
function SampleModal(props: DialogProps<ISampleModalProps>) {
  return (
    <Modal
      open={props.open}
      title="明细导出"
      titleMb={50}
      onOK={() => props.onOK('Hello I am OK')}
      onCancel={() => props.onCancel('Hello I am CANCEL')}
    >
      <Typography>Hello, my name is {props.name}</Typography>
    </Modal>
  )
}

function Layout() {
  const { openModal } = useModal()
  const [count, setCount] = useState(0)

  return (
    <Button
      onClick={async () => {
        setCount(count + 1)
        const result = await openModal<ISampleModalProps>(
          SampleModal,
          'for sample',
          {
            name: `${count + 1}`,
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
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
)
