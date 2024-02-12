import {notFound} from 'next/navigation'

function Review({params}:{
    params:{
        productId:String,
        reviewId:String
    }
}) {

  if(parseInt(params.reviewId) > 1000) {
    notFound()
  }

  return (
    <div>
      <h1>Review id:{params.reviewId} and Product id:{params.productId}</h1>
    </div>
  )
}

export default Review
