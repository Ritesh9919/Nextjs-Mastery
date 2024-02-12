import React from 'react'

function Docs({params}:{
    params:{
        slug:String[]
    }
}) {
  
    if(params.slug?.length === 2) {
        return <h1>Viewing docs for feature {params.slug[0]} and Concept {params.slug[1]}</h1>
    }else if (params.slug?.length === 1) {
        return <h1>Viewing docs for feature {params.slug[0]}</h1>
    }else {
        return <h1>Viewing home docs</h1>
    }

}

export default Docs
