import PaintingList from './components/PaintingList/PaintingList'
import paintings from './paintings.json';

export default function App(){
  return (
  <div>
  <PaintingList items={paintings}/>
  </div>);
}