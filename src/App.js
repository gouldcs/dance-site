import logo from './logo.svg';
import Navbar from './components/navbar';
import { Button, Icon, Header, Image, Segment, Item, List} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import danceHeader from './assets/dance_header.jpeg'
import bg from './assets/bg.png'
import ImageHeader from './components/Header';
import vision from './assets/vision.jpeg';
import './App.css';
import def from './assets/def.png'
import divDance from './assets/diverse_dance.jpg'
import mentalHealth from './assets/mental_health.png'
import cameron from './assets/pfp.jpg'
import amanda from './assets/amanda_dance.jpeg'

function App() {
  return (
    <div className="App">
      <img className='background' src={bg}/>
      <header className="App-header">
        <Navbar/>
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
          <ImageHeader id="home" />
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

        <Header id="about" style={{color:'#fff'}}>About Us</Header>
        <p>
        We are a group that believes that mind-body connection is important to healing and
        feeling whole, especially after traumatic events. We understand that often,
        survivors have a disconnect with their bodies, struggle with shame and guilt,
        and have difficulty expressing how their trauma has affected their self-image and
        relationship with their body.
        </p>
        <Item.Group style={{textAlign:'left'}}>
          <Item>
            <Item.Image size='medium' rounded src={vision} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Our Vision</Item.Header>
              <Item.Description style={{color:"#ddd", fontSize:18, lineHeight:'175%'}}>
                We are a group that believes that mind-body connection is important to healing and
                feeling whole, especially after traumatic events. We understand that often,
                survivors have a disconnect with their bodies, struggle with shame and guilt,
                and have difficulty expressing how their trauma has affected their self-image and
                relationship with their body.
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Our Mission Statement</Item.Header>
              <Item.Description style={{color:"#ddd", fontSize:18, lineHeight:'175%'}}>
              We will give abuse victims tools to not constant re-live their trauma in their bodies and build
              a better connection with themselves and view their bodies more positively.
              </Item.Description>
            </Item.Content>
            <Item.Image size='medium' rounded src={mentalHealth} verticalAlign='middle' style={{height:'100%'}} />
          </Item>
        </Item.Group>
        <Header id="values" style={{color:'#fff'}}>Our Values</Header>
        <p>
          <List relaxed='very'>
            <List.Item>
              <List.Icon name='lock' color='pink' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Safety</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  creating a safe and vulnerable environment for participants to feel
                  comfortable in moving and speaking about their experiences. Every story
                  and type of movement is treated with respect.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='heart' color='pink' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Acceptance</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  accepting everyone as they are and where they are in their journey
                  towards healing and recovering
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='group' color='pink' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Diversity</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  everyone and anyone is welcomed into the workshop no matter the age,
                  race, gender, or sex
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='handshake' color='pink' verticalAlign='middle'/>
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>{"Equity & Equality"}</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  a wide variety a people experience trauma and deserve to know that they are
                  not alone and that there are resources out there for them. No one’s story is
                  viewed as worse than anyone else’s.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </p>
        <br/>
        <Item.Group style={{textAlign:'left'}}>
          <Item>
            <Item.Image size='medium' rounded src={divDance} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Our Project</Item.Header>
              <Item.Description style={{color:"#ddd", fontSize:18, lineHeight:'175%'}}>
              Our workshop would consist of a one hour and a half long class. The structure of
              this class would include a half an hour discussion and an hour of movement. The
              purpose of our workshop is to provide survivors of abuse the opportunity to reconnect
              with their body and leave the class with helpful tools and resources to continue
              growing a positive relationship with their bodies.
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
        </Item.Group>

        <Header  id="timeline" style={{color:'#fff'}}>Project Timeline</Header>
        <p>
          <List relaxed='very'>
            <List.Item>
              <List.Icon name='search' color='white' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Research</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  Our group will be conducting research on the effectiveness of
                  dance therapy for survivors of physical, emotional and mental abuse.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='pencil alternate' color='white' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Workshop Development</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  This workshop will be for one day and will be one and a half hours long. We will create a
                  structure for the class that includes a half an hour discussion and an hour of movement therapy.
                  The beginning discussion would consist of an introduction to the structure of the class and
                  help to build a connection between everyone to create a safe environment where people can share
                  their trauma if they would like to. The goals of this class include establishing a better
                  connection between the survivor and their body, and providing the participants with a healthy
                  outlet and resources that will actively help to continue making their relationship to their body
                  a positive one.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='archive' color='white' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>Resource Acquisition</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  Our next step in this process is finding teachers who have the appropriate skills and
                  qualifications to teach these workshops, as well as training them to do so effectively.
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='world' color='white' verticalAlign='middle' />
              <List.Content>
                <List.Header as='h2' style={{color:'#fff'}}>{"Workshop Implementation"}</List.Header>
                <List.Description style={{color:'#bbb'}}>
                  Once we have our teachers trained, we will organize for the workshop to attend college
                  campuses, schools, prisons, LGBTQ centers, sexual health facilities, and other underserved
                  communities across America.
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </p>

        <Header id="team" style={{color:'#fff'}}>Our Team</Header>
        <p>
          Our team consists of a diverse set of five undergraduate students at
          Loyola Marymount University. We strive to provide a service that is both
          accessible and inviting to those who are in need.
        </p>
        <Item.Group style={{textAlign:'left'}}>
          <Item>
            <Item.Image size='tiny' circular src={amanda} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Amanda Churchill</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Researcher</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Isa Ajpop</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Dance Instructor</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Jessica Cipkas</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Dance Instructor</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={def} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Jade Wilson</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Dance Instructor</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University
              </Item.Description>
            </Item.Content>
          </Item>
          <br/>
          <Item>
            <Item.Image size='tiny' circular src={cameron} style={{height:'100%'}} />
            <Item.Content>
              <Item.Header as='a' style={{color:"#fff"}}>Cameron Gould</Item.Header>
              <Item.Meta style={{color:"#eee", fontSize:18}}>Technical Development</Item.Meta>
              <Item.Description style={{color:"#ddd", fontSize:16}}>
                Loyola Marymount University
              </Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
        <br/>
      </header>
    </div>
  );
}

export default App;
