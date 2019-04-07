import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import Header from '../components/views/layout/Header';
import QuestionContainer from '../components/views/layout/questionContainer'
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

describe('correctly starts the game', () => {
  test("if the user dosen't click the start button, the game doesen't start",
    () => {
      expect(wrapped.find(QuestionContainer).length).toEqual(0)
    })
  test("start the game when the user clicks on the main button", () => {
    wrapped.find("button").simulate("click")
    expect(wrapped.find(QuestionContainer).length).toEqual(1)
  })
})



// Postgame Container
describe("Render the result component only if the user answered all questions", () => {

  test("it doesen't render when the game isn't over", () => {
    expect(wrapped.find(PostgameContainer).length).toEqual(0);
  })


  test("it does render when the game is over", () => {
    boilerplate()

    wrapped.setState({ gameOver: true })

    expect(wrapped.find(PostgameContainer).length).toEqual(1);
  })
})

test("It should render the character with the most points", () => {
  boilerplate()
  wrapped.setState({ gameOver: true });

  wrapped.setState({
    characterScores:
      { DT: 0, PB: 0, SS: 3, JS: 2, CL: 0, TL: 0 }
  })

  expect(wrapped.find("#winningCharacter").text()).toContain("Sansa Stark");
})