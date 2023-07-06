import Breadcrumb from '../Components/BreadCrumb/Breadcrumb';
import Advance from '../Components/Pages/Shop/Advance/Advance';
import Estates from '../Components/Pages/Shop/Estates/Estates';
import '../Components/Pages/Shop/index.scss';

function Shop() {
  return (
    <main id='shop'>
      <Breadcrumb title={'Shop'}/>
      <div className="container">
        <Estates/>
        <Advance/>
      </div>
      
    </main>
  )
}

export default Shop