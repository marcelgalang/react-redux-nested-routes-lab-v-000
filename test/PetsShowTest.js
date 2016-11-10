import React from 'react';
import expect from 'expect';
import {mount} from 'enzyme';

import FakeProvider from './FakeProvider';
import PetsShow from '../src/containers/PetsShow';

describe('PetsShow', function(){

  it('renders the pets show component', function(){
    const wrapper = mount(<FakeProvider>< PetsShow routeParams={{id: 1}} /></FakeProvider>);
    const show = wrapper.children();
    expect(show.first().type()).toEqual('h2', 'Pets show should have an h2 with the pets name');
    expect(show.first().text()).toEqual('Grover');
  })

  it('finds the pet by the route ID', function(){
    const wrapper = mount(<FakeProvider>< PetsShow routeParams={{id: 2}} /></FakeProvider>);
    const show = wrapper.children();
    expect(show.first().type()).toEqual('h2');
    expect(show.first().text()).toEqual('Fido');
  })

})
