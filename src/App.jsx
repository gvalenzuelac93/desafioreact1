import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './components/MyCard';
import Header from './components/Header';
import Footer from './components/Footer'
import Stack from 'react-bootstrap/Stack';

function App() {
     return (
       <>
         <Header
         titulo = "Adopta un perrito" 
         />
         <Stack direction="horizontal" gap={3}>
         <MyCard
           image="https://cdn.pixabay.com/photo/2019/05/21/05/07/animal-4218265_1280.jpg"
           title="Bartolo"
           colorBadge="success"
           text="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
           textBadge="Husky"
         />
         <MyCard
           image="https://cdn.pixabay.com/photo/2017/08/29/20/47/dog-2694848_1280.jpg"
           title="Messi"
           colorBadge="primary"
           text="Es juguetón, amigable y se lleva bien con los niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
           textBadge="Bobtail"
         />
         <MyCard
           image="https://cdn.pixabay.com/photo/2020/06/04/01/01/shar-pei-5256832_1280.jpg"
           title="Gohan"
           colorBadge="danger"
           text="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional."
           textBadge="Shar Pei"
         />
         <MyCard
           image="https://cdn.pixabay.com/photo/2020/07/06/03/57/beagle-5375286_1280.jpg"
           title="Princesa"
           colorBadge="warning"
           text="Es una compañera leal y cariñosa que adora los mimos y abrazos.¡Ayuda a Princesa a encontrar su final feliz!"
           textBadge="Beagle"
         />
         </Stack>
         <Footer
         footer = "Explora nuestra galería de adopción de perritos para encontrar tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."
         />
     </>
     );
}
export default App;

