'use client'
import ToUpIcon from '../../public/icons/ToUpIcon.svg';

export default function ToTopButton() {
  function moveToTop() {
    window.scrollTo(0,0);
  }
  return (
    <ToUpIcon className="ml-auto cursor-pointer tablet:absolute tablet:bottom-[-34px] tablet:right-0" onClick={moveToTop}></ToUpIcon>
  )
}
