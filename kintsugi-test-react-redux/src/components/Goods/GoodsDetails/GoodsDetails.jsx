import { useParams } from "react-router"

export default function GoodsDetails() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      
    </div>
  )
}