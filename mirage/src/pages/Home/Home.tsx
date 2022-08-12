import React from 'react';
import Button from '../../components/UI/Button/Button';
import offerImg from '../../assets/img/offer-img.png';
import infoItem1 from '../../assets/img/item-1.png';
import infoItem2 from '../../assets/img/item-2.png';
import infoItem3 from '../../assets/img/item-3.png';
import Lib1 from '../../assets/svg/lib-1.svg';
import Lib2 from '../../assets/svg/lib-2.svg';
import Lib3 from '../../assets/svg/lib-3.svg';
import Lib4 from '../../assets/svg/lib-4.svg';
import Lib5 from '../../assets/svg/lib-5.svg';
import Lib6 from '../../assets/svg/lib-6.svg';
import messageFrame from '../../assets/svg/message-frame.svg';
import uniLogo from '../../assets/svg/univer-logo.svg';

import './Home.scss';

const Home = () => {
  return (
    <>
      <section className='offer'>
        <div className='offer__container'>
          <div className='offer__left'>
            <div className='offer__title'>Become a //super// learner</div>
            <div className='offer__subtitle'>
              Upword believes that reading efficiently is a superpower. Optimize
              your reading skills, read faster and understand what you need.
            </div>
            <Button>Start learning</Button>
          </div>
          <div className='offer__right'>
            <img
              loading='lazy'
              src={offerImg}
              className='image'
              width='770'
              height='504'
              alt='offer image'
            />
          </div>
        </div>
      </section>
      <section className='info'>
        <div className='info__item info__item-dark info__item-br-light info__item-bb'>
          <img
            loading='lazy'
            src={infoItem1}
            className='image'
            width='453'
            height='304'
            alt='offer image'
          />
        </div>
        <div className='info__item info__item-dark info__item-bb'>
          <div className='info__title'>{'{ In short } , read) faster'}</div>
          <div className='info__subtitle'>
            Our automatically generated summaries guarantee you read only what
            you need.
          </div>
          <Button>Start learning</Button>
        </div>
        <div className='info__item info__item-bb info__item-br'>
          <div className='info__title'>We’ll read the text *for you*</div>
          <div className='info__subtitle'>
            Whether you learn better by listening or on the move, Upword has
            your back. Our text-to-speech engine automatically transforms text
            to audio, making it easy to consume and comprehend.
          </div>
          <Button>Start learning</Button>
        </div>
        <div className='info__item info__item-bb'>
          <img
            loading='lazy'
            src={infoItem2}
            className='image'
            width='453'
            height='304'
            alt='offer image'
          />
        </div>
        <div className='info__item info__item-br'>
          <img
            loading='lazy'
            src={infoItem3}
            className='image'
            width='453'
            height='304'
            alt='offer image'
          />
        </div>
        <div className='info__item'>
          <div className='info__title'>Learn //actively//</div>
          <div className='info__subtitle'>
            Upword transforms reading into a fully interactive learning
            experience. Highlight, take key notes, translate unfamiliar words
            and add important comments to reduce friction, maximize
            comprehension, and improve reading efficiency.
          </div>
          <Button>Start learning</Button>
        </div>
      </section>
      <section className='library'>
        <div className='library__left'>
          <div className='library__title'>
            {'Your { new } knowledge library '}
          </div>
          <div className='library__subtitle'>
            Every article you upload to Upword is securely stored in your
            personal library, for life. Create folders and reading lists, tag
            content and share articles with friends to keep your lifelong
            knowledge managed and in control.
          </div>
          <Button>Start learning</Button>
        </div>
        <div className='library__right'>
          <div className='library__item'>
            <img src={Lib1} alt='lib 1' />
          </div>
          <div className='library__item'>
            <img src={Lib2} alt='lib 2' />
          </div>
          <div className='library__item'>
            <img src={Lib3} alt='lib 3' />
          </div>
          <div className='library__item'>
            <img src={Lib4} alt='lib 4' />
          </div>
          <div className='library__item'>
            <img src={Lib5} alt='lib 5' />
          </div>
          <div className='library__item'>
            <img src={Lib6} alt='lib 6' />
          </div>
        </div>
      </section>
      <section className='message'>
        <div className='message__box'>
          <div className='message__frame'>
            <img
              loading='lazy'
              src={messageFrame}
              className='image'
              width='80'
              height='61'
              alt='message-frame'
            />
          </div>
          <div className='message__content'>
            <div className='message__text'>
              {` Upword provided me a reliable way to skim, comprehend, and summarize
              the cases that were so quintessential to my class. I would
              definitely recommend Upword to anybody who is trying to secure an A
              and truly understand the material that is in that class."`}
            </div>
            <div className='message__author'>
              <img src={uniLogo} alt='logo uni' />
              <div className='message__name'>
                <div>Evan</div>
                <div>Cornell University, Arts and design student</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
