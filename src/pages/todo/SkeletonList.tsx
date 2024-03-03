import { Divider, Skeleton } from '@applaudo/react-clapp-ui';

export const SkeletonList = () => {
  return (
    <>
      <Skeleton loading repeatCount={5}>
        <Skeleton.Paragraph rows={1} width="medium"/>
        <Skeleton.Paragraph rows={1} width="long"/>
        <Divider/>
      </Skeleton>
      <div style={{display: 'flex', gap: '8px'}}>
        <Skeleton.Button/>
        <Skeleton.Button/>
      </div>
    </>
  );
};
