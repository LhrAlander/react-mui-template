import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button } from '@mui/material'
import z from 'zod'

import { ThemeProvider } from '@mui/system'
import addModalWrapper from '@/components/hoc/addModalWrapper'
import { DialogProps } from '@/components/modal/types'
import useModal from '@/hooks/useModal'
import Modal from '@/components/modal'
import theme from '@/common/theme'
import Typography from '@/components/widgets/typography'
import Form from '@/components/widgets/form'
import FormInput from '@/components/widgets/form/components/formInput'

const rootElem = document.querySelector('#root')
const root = createRoot(rootElem)

interface ISampleModalProps {
  name: string
}

interface FormState {
  username: string
  password: string
}

function SampleModal(props: DialogProps<ISampleModalProps>) {
  return (
    <Modal
      open={props.open}
      title="明细导出"
      footer={null}
      titleMb={50}
      onOK={() => props.onOK('Hello I am OK')}
      onCancel={() => props.onCancel('Hello I am CANCEL')}
    >
      <Form<FormState>
        defaultValues={{
          username: '123',
        }}
        schema={z.object({
          username: z.string().min(3, { message: 'hello' }),
          password: z.string().min(1, '请输入密码'),
        })}
      >
        <FormInput disabled name="username" label="用户名" />
        <FormInput name="password" label="密码" type="password" />
        <Button fullWidth variant="contained" color="primary" type="submit">
          登录
        </Button>
      </Form>
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
