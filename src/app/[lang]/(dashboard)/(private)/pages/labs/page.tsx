import { getLabsData } from '@/app/server/actions'
import Labs from '@/views/pages/labs'

const LabsPage = async () => {
  // Vars
  const data = await getLabsData()

  return <Labs data={data} />
}

export default LabsPage
