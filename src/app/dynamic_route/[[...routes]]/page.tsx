interface CategoryProps {
  params: {
    routes: string[],
  }
  searchParams?: string
}

export default function Category(props: CategoryProps){
  console.log(props)
  const { routes } = props.params
  console.log(routes)
  return(
    <h1>Categoria dinámica: {routes}</h1>
  )
}