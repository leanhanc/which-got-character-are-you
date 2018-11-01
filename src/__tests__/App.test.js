import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Header from '../components/views/layout/Header';
import PostgameContainer from "../components/views/layout/postgameContainer"

const boilerplate = () => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  document.getElementsByTagName('head')[0].appendChild(script);
}

let wrapped;

beforeEach(() => {
  wrapped = mount(<App />);
});

afterEach(() => {
  wrapped.unmount();
});


// Landing
describe('correct render the landing page', () => {
  test("it correctly renders the Header component", () => {
    expect(wrapped.find(Header).length).toEqual(1);
  })
  test("it renders the title", () => {
    expect(wrapped.text()).toContain("Thrones")
  })
})

describe('correcty start the game', () => {
  test("it starts the game if user click the main button", () => {
    expect(wrapped.find(Header).length).toEqual(1);
  })

})



// Postgame Container
describe("Render the result component only if the user answered all questions", () => {

  test("it doesen't render when the game isn't over", () => {
    expect(wrapped.find(PostgameContainer).length).toEqual(0);
  })


  test("it does render when the game isn't over", () => {
    boilerplate()

    wrapped.setState({ gameOver: true })

    expect(wrapped.find(PostgameContainer).length).toEqual(1);
  })
})
