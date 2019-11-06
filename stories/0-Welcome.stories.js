import React from 'react';
import AddForm from '../src/components/addForm';
import AddItem from '../src/components/addItem';
import AddList from '../src/components/addList';
import { storiesOf } from '@storybook/react';

const post = {
  id: 1,
  title: 'Rx7 for sale',
  link: 'https://www.adverts.ie/car/mazda/rx7/mazda-rx7-for-sale/683958',
  shortdescription: 'Selling a clean rx7 more details in the link',
  carbrand: 'Mazda',
  author: 'Kasper Gutek',
};

storiesOf("carinfo-app/Add Form",module).add("default",()=><AddForm/>);
storiesOf('carinfo-app/Add Item', module)
    .add('default', () => <AddItem post= { post }  />
    )

storiesOf('carinfo-app/Add List', module)
    .add('default', () => { 
        const defaultPosts = [
            { ...post, id: 1, title: 'Rx 7 for sale'},
            { ...post, id: 2, title: 'R34 for sale'},
            { ...post, id: 3, title: 'Supra will swap for an BMW'},
            { ...post, id: 4, title: 'Evo for scrap'}
        ];
    return <AddList posts= { defaultPosts }  />
});