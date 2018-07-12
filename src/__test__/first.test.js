// npm install --save-dev jest
// yarn add --dev enzyme
//##########################################//
// npm install -g jest-clisudo su
// install enzyme
// enzyme adaptor
// npm install --save-dev jest



import React from 'react'
import { shallow } from 'enzyme'
import BooksApp from '../App.js'
// import { configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// configure({ adapter: new Adapter() });

describe('bla bla', () => {
    it('testing BooksApp', () => {
        expect(1+1).toEqual(2)
        // const component = shallow(<BooksApp/>)
        // console.log(component)
    })
    
})

