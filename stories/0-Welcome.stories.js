import React from 'react';
import AddForm from '../src/components/addForm';
import AddItem from '../src/components/addItem';
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
    .add('No hyperlink', () => <AddItem post= { { ...post, link: ''} }  />
    )