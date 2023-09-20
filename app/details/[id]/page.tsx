import Details from './details';

type Params = {
  params: {
    id: string;
  };
};

export default function DetailPage({ params: { id } }: Params) {
  return <Details id={id} />;
}
