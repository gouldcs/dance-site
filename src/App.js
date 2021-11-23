import logo from './logo.svg';
import Navbar from './components/navbar';
import { Button, Icon, Header, Image, Segment, Item} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import danceHeader from './assets/dance_header.jpeg'
import bg from './assets/bg.png'
import ImageHeader from './components/Header';
import './App.css';
import def from './assets/def.png'

function App() {
  return (
    <div className="App">
      <img className='background' src={bg}/>
      <header className="App-header">
        <Navbar/>
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <ImageHeader />
        </div>
        <Header style={{color:'#fff'}}>Movement as a Form of Healing</Header>
        <p>
        Body Catalyst provides workshops that focus on reconnecting
        with the body and giving resources to victims so that they
        may actively work towards rebuilding their relationship with
        their bodies in a healthy and positive way. With a focus on
        meditative movement and reimagining connections and pathways
        of the body, we hope to help people see themselves and their
        bodies in a new light, and to build a positive relationship
        with their own energy that they can continue to carry with them
        as they go through their daily lives. We visit college campuses,
        schools, prisons, LGBTQ centers, sexual health facilities, and
        other underserved communities to teach about body reclamation
        through dance and meditative practices.
        </p>

        <Header style={{color:'#fff'}}>About Us</Header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
        porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
        massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
        tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
        Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing
        ultrices tellus, in suscipit massa vehicula eu.
        </p>

        <Header style={{color:'#fff'}}>Section</Header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
        porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
        massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel
        tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis.
        Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing
        ultrices tellus, in suscipit massa vehicula eu.
        </p>

        <Header style={{color:'#fff'}}>Our Team</Header>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
        nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
        aliquam. Ut aliquet tristique nisl vitae volutpat.
        </p>
        <Item.Group style={{textAlign:'left'}}>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Amanda Churchill</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Team Member Position</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University Major
              </Item.Description>
              <Item.Extra style={{color:"#bbb", fontSize:16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
              nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
              aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
              porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
              massa. Aliquam erat volutpat.
              </Item.Extra>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Isa Ajpop</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Team Member Position</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University Major
              </Item.Description>
              <Item.Extra style={{color:"#bbb", fontSize:16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
              nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
              aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
              porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
              massa. Aliquam erat volutpat.
              </Item.Extra>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Jessica Cipkas</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Team Member Position</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University Major
              </Item.Description>
              <Item.Extra style={{color:"#bbb", fontSize:16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
              nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
              aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
              porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
              massa. Aliquam erat volutpat.
              </Item.Extra>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Jade Wilson</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Team Member Position</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University Major
              </Item.Description>
              <Item.Extra style={{color:"#bbb", fontSize:16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
              nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
              aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
              porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
              massa. Aliquam erat volutpat.
              </Item.Extra>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Cameron Gould</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Team Member Position</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University Major
              </Item.Description>
              <Item.Extra style={{color:"#bbb", fontSize:16}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit
              nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar
              aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet
              porttitor venenatis. Donec a dui et dui fringilla consectetur id nec
              massa. Aliquam erat volutpat.
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </header>
    </div>
  );
}

export default App;
