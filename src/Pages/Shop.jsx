import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import Advance from '../Components/Pages/Shop/Advance/Advance';
import '../Components/Pages/Shop/index.scss'
function Shop() {
  return (
    <main id='shop'>
      <Breadcrumb title={'Shop'}/>
      <div className="container">
        <div className="left-col">Left</div>
        <Advance/>
      </div>
    </main>
  )
}

export default Shop