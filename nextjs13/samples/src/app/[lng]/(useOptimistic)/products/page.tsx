import { Form } from './components/Form'

export default function Product() {
  return <Form products={[{ id: 1, title: 'p1', description: 'd1' }]} />
}
