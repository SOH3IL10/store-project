import './style.scss';

export default function Brand({image}) {
  return (
    <div className='brand'>
        <img src={image} alt="" />
    </div>
  )
}
