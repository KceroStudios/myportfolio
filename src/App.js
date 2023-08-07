
import './App.css';

import Header from './Components/Header';
import MainMenu from './Components/MainMenu';
import AboutMe from './Components/AboutMe';
import VisibleAnimate from './Components/VisibleAnimate';

import React, { useState, useRef } from 'react';

function App() {
  // the next function detect mouse position, and send to Header component
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // reset to x position, now 0 is the middle
  const containerRef = useRef(null);
  const handleMouseMove = (event) => {
    const container = containerRef.current;
    if (container) {
      const { left, top, width, height } = container.getBoundingClientRect();
      const offsetX = event.clientX - (left + width / 2);
      const offsetY = event.clientY - top;
      setMousePosition({ x: offsetX, y: offsetY });
    }
  };
  // change class to the photo in the header component
  const getPosition = () => {
    if (mousePosition.y <= 80 && Math.abs(mousePosition.x) <= 70) {
      return 'photo-n';
    } else if (mousePosition.y <= 80 && mousePosition.x < -70) {
      return 'photo-nw';
    } else if (mousePosition.y > 80 && mousePosition.y < 180 && mousePosition.x < -70) {
      return 'photo-w';
    } else if (mousePosition.y > 180 && mousePosition.x < -70) {
      return 'photo-ws';
    } else if (mousePosition.y >= 160 && Math.abs(mousePosition.x) <= 70) {
      return 'photo-s';
    } else if (mousePosition.y >= 160 && mousePosition.x > 70) {
      return 'photo-se';
    } else if (mousePosition.y > 80 && mousePosition.y < 180 && mousePosition.x > 70) {
      return 'photo-e';
    } else if (mousePosition.y > 70 && mousePosition.x > 80) {
      return 'photo-ne';
    }else{
      return '';
    }
  };

  return (
    <div className="App"  onMouseMove={handleMouseMove}  ref={containerRef}>
      <Header position={getPosition()} />
      <MainMenu />
      <AboutMe />
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Tristique sollicitudin nibh sit amet commodo nulla. Tellus in metus vulputate eu scelerisque. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Suspendisse in est ante in nibh mauris cursus. Consectetur a erat nam at lectus urna duis convallis convallis. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet aliquam id diam maecenas. Et tortor consequat id porta. Dapibus ultrices in iaculis nunc sed augue lacus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Faucibus in ornare quam viverra orci sagittis. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ut tortor pretium viverra suspendisse.

Tellus elementum sagittis vitae et leo duis ut diam. Sed velit dignissim sodales ut eu sem integer vitae. Lacus vestibulum sed arcu non odio euismod lacinia at. Nulla aliquet enim tortor at auctor urna. Morbi tristique senectus et netus. Sed id semper risus in hendrerit gravida rutrum. Quisque non tellus orci ac. Vivamus at augue eget arcu dictum varius duis. Commodo nulla facilisi nullam vehicula ipsum a. Posuere morbi leo urna molestie. Ultrices dui sapien eget mi proin sed libero enim. Massa enim nec dui nunc. Donec ultrices tincidunt arcu non. Sed enim ut sem viverra aliquet.

Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Nisl vel pretium lectus quam id leo in vitae turpis. Ut porttitor leo a diam. Diam maecenas ultricies mi eget mauris pharetra et. Tortor aliquam nulla facilisi cras fermentum. Tortor id aliquet lectus proin nibh nisl. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. At tempor commodo ullamcorper a lacus. Consequat interdum varius sit amet mattis vulputate enim. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Tortor consequat id porta nibh.

Sed viverra ipsum nunc aliquet bibendum. Auctor augue mauris augue neque. Nunc id cursus metus aliquam. Tortor posuere ac ut consequat semper viverra. Leo vel orci porta non pulvinar neque laoreet suspendisse. In ornare quam viverra orci sagittis eu. Neque ornare aenean euismod elementum nisi quis. Viverra nibh cras pulvinar mattis nunc. Pulvinar mattis nunc sed blandit libero volutpat. Urna duis convallis convallis tellus id interdum velit laoreet id. Mi tempus imperdiet nulla malesuada pellentesque. Et tortor at risus viverra adipiscing.

Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Feugiat in fermentum posuere urna nec. Eu lobortis elementum nibh tellus molestie. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Quis varius quam quisque id diam vel quam elementum pulvinar. In fermentum et sollicitudin ac. Mauris cursus mattis molestie a iaculis. Eget mauris pharetra et ultrices neque ornare aenean. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus.
      </p>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Tristique sollicitudin nibh sit amet commodo nulla. Tellus in metus vulputate eu scelerisque. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Suspendisse in est ante in nibh mauris cursus. Consectetur a erat nam at lectus urna duis convallis convallis. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet aliquam id diam maecenas. Et tortor consequat id porta. Dapibus ultrices in iaculis nunc sed augue lacus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Faucibus in ornare quam viverra orci sagittis. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ut tortor pretium viverra suspendisse.

Tellus elementum sagittis vitae et leo duis ut diam. Sed velit dignissim sodales ut eu sem integer vitae. Lacus vestibulum sed arcu non odio euismod lacinia at. Nulla aliquet enim tortor at auctor urna. Morbi tristique senectus et netus. Sed id semper risus in hendrerit gravida rutrum. Quisque non tellus orci ac. Vivamus at augue eget arcu dictum varius duis. Commodo nulla facilisi nullam vehicula ipsum a. Posuere morbi leo urna molestie. Ultrices dui sapien eget mi proin sed libero enim. Massa enim nec dui nunc. Donec ultrices tincidunt arcu non. Sed enim ut sem viverra aliquet.

Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Nisl vel pretium lectus quam id leo in vitae turpis. Ut porttitor leo a diam. Diam maecenas ultricies mi eget mauris pharetra et. Tortor aliquam nulla facilisi cras fermentum. Tortor id aliquet lectus proin nibh nisl. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. At tempor commodo ullamcorper a lacus. Consequat interdum varius sit amet mattis vulputate enim. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Tortor consequat id porta nibh.

Sed viverra ipsum nunc aliquet bibendum. Auctor augue mauris augue neque. Nunc id cursus metus aliquam. Tortor posuere ac ut consequat semper viverra. Leo vel orci porta non pulvinar neque laoreet suspendisse. In ornare quam viverra orci sagittis eu. Neque ornare aenean euismod elementum nisi quis. Viverra nibh cras pulvinar mattis nunc. Pulvinar mattis nunc sed blandit libero volutpat. Urna duis convallis convallis tellus id interdum velit laoreet id. Mi tempus imperdiet nulla malesuada pellentesque. Et tortor at risus viverra adipiscing.

Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Feugiat in fermentum posuere urna nec. Eu lobortis elementum nibh tellus molestie. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Quis varius quam quisque id diam vel quam elementum pulvinar. In fermentum et sollicitudin ac. Mauris cursus mattis molestie a iaculis. Eget mauris pharetra et ultrices neque ornare aenean. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus.
      </p>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Tristique sollicitudin nibh sit amet commodo nulla. Tellus in metus vulputate eu scelerisque. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Malesuada proin libero nunc consequat interdum. Suspendisse in est ante in nibh mauris cursus. Consectetur a erat nam at lectus urna duis convallis convallis. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sit amet aliquam id diam maecenas. Et tortor consequat id porta. Dapibus ultrices in iaculis nunc sed augue lacus. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Faucibus in ornare quam viverra orci sagittis. Blandit libero volutpat sed cras ornare arcu dui vivamus arcu. Ut tortor pretium viverra suspendisse.

Tellus elementum sagittis vitae et leo duis ut diam. Sed velit dignissim sodales ut eu sem integer vitae. Lacus vestibulum sed arcu non odio euismod lacinia at. Nulla aliquet enim tortor at auctor urna. Morbi tristique senectus et netus. Sed id semper risus in hendrerit gravida rutrum. Quisque non tellus orci ac. Vivamus at augue eget arcu dictum varius duis. Commodo nulla facilisi nullam vehicula ipsum a. Posuere morbi leo urna molestie. Ultrices dui sapien eget mi proin sed libero enim. Massa enim nec dui nunc. Donec ultrices tincidunt arcu non. Sed enim ut sem viverra aliquet.

Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Nisl vel pretium lectus quam id leo in vitae turpis. Ut porttitor leo a diam. Diam maecenas ultricies mi eget mauris pharetra et. Tortor aliquam nulla facilisi cras fermentum. Tortor id aliquet lectus proin nibh nisl. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. At tempor commodo ullamcorper a lacus. Consequat interdum varius sit amet mattis vulputate enim. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Tortor consequat id porta nibh.

Sed viverra ipsum nunc aliquet bibendum. Auctor augue mauris augue neque. Nunc id cursus metus aliquam. Tortor posuere ac ut consequat semper viverra. Leo vel orci porta non pulvinar neque laoreet suspendisse. In ornare quam viverra orci sagittis eu. Neque ornare aenean euismod elementum nisi quis. Viverra nibh cras pulvinar mattis nunc. Pulvinar mattis nunc sed blandit libero volutpat. Urna duis convallis convallis tellus id interdum velit laoreet id. Mi tempus imperdiet nulla malesuada pellentesque. Et tortor at risus viverra adipiscing.

Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Feugiat in fermentum posuere urna nec. Eu lobortis elementum nibh tellus molestie. Scelerisque varius morbi enim nunc faucibus a pellentesque sit. Quis varius quam quisque id diam vel quam elementum pulvinar. In fermentum et sollicitudin ac. Mauris cursus mattis molestie a iaculis. Eget mauris pharetra et ultrices neque ornare aenean. Vitae congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Habitant morbi tristique senectus et netus et. Phasellus egestas tellus rutrum tellus.
      </p>
    </div>
  );
}

export default App;
