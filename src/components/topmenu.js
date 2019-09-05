import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import TitleMenu from "./titleMenu"
import "./topmenu.scss"


const TopMenu = () => (
  
<StaticQuery
    query={graphql`
      query topMenuQuery {
        allPrismicTopmenu {
        edges {
          node {
            id
            data {
              menu_links {
                label {
                  text
                }
                link {
                  url
                }
              }
            }
          }
        }
      }
      }
    `}

    render={data => (
      <Navbar id="mainNav" expand="lg" variant="dark">
        <Navbar.Brand><TitleMenu /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> 
        {data.allPrismicTopmenu.edges.map(document => (
            <Nav key={document.node.id} >
                {document.node.data.menu_links.map(list => (
                    <li key={list.link.url} className="nav-item">  
                    <Link to={list.link.url} className="nav-link">{list.label.text}</Link>                 
                    </li>
                ))}
                
            </Nav>
        ))}
        </Navbar.Collapse>
        </Navbar>
    )}
  />

)

export default TopMenu

