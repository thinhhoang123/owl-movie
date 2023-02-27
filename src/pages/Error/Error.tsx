import * as React from 'react';
import Button from '../../components/Button/Button';
import styles from './Error.module.scss';
export interface IErrorProps {}

export default function Error(props: IErrorProps) {
  return (
    <div>
      <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <img
            className={styles.errorImage}
            src="https://i.ibb.co/G9DC8S0/404-2.png"
          />

          <div className={styles.errorCard}>
            <h1 className="my-2 font-bold text-2xl">
              Looks like you've found the doorway to the great nothing
            </h1>
            <p className="my-2">
              Sorry about that! Please visit our hompage to get where you need
              to go.
            </p>
            <Button width={'50%'}>Take me there</Button>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </div>
  );
}
