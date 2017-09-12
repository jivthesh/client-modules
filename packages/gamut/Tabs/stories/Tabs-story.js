import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Tabs from '../index';

function generateTabConfig(num, isDefault) {
  return [...Array(num).keys()].map(ind => {
    const displayInd = ind + 1;
    return {
      text: 'Tab Number ' + displayInd,
      default: isDefault === ind
    };
  });
}

storiesOf('Tabs', module)

  .addWithInfo('Default style', () => (
    <Tabs config={generateTabConfig(5, 2)}>
      <div>
        Tab 1: Illum et molestiae eum. Voluptatem molestiae iure cum placeat
        ipsum. Sunt culpa optio doloribus qui iure consequatur culpa modi.
        Expedita sed aut magnam. Ut architecto suscipit quas fuga delectus
        incidunt et. Iste iusto itaque et blanditiis sed quis corrupti.
      </div>
      <div>Tab 2</div>
      <div>
        Tab 3: Quia nostrum velit ex modi nihil reprehenderit voluptas illum.
        Natus quia molestiae. Et quae expedita officiis officia rem
        consequuntur.
      </div>
      <div>Tab 4</div>
      <div>
        Tab 5: Hic ea sunt nulla libero amet. Rerum quia vitae magni sed aut
        rerum natus consequuntur necessitatibus.
      </div>
    </Tabs>
  ))
  .addWithInfo('Animated underline style', () => (
    <Tabs config={generateTabConfig(5, 0)} animatedUnderlineStyle>
      <div>
        Tab 1: Illum et molestiae eum. Voluptatem molestiae iure cum placeat
        ipsum. Sunt culpa optio doloribus qui iure consequatur culpa modi.
        Expedita sed aut magnam. Ut architecto suscipit quas fuga delectus
        incidunt et. Iste iusto itaque et blanditiis sed quis corrupti.
      </div>
      <div>Tab 2</div>
      <div>
        Tab 3: Quia nostrum velit ex modi nihil reprehenderit voluptas illum.
        Natus quia molestiae. Et quae expedita officiis officia rem
        consequuntur.
      </div>
      <div>Tab 4</div>
      <div>
        Tab 5: Hic ea sunt nulla libero amet. Rerum quia vitae magni sed aut
        rerum natus consequuntur necessitatibus.
      </div>
    </Tabs>
  ));;
