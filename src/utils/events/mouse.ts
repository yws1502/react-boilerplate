export const createMouseDragHandler = (
  onDragChange: (deltaX: number, deltaY: number) => void,
  cursorType:
    | 'move'
    | 'col-resize'
    | 'row-resize'
    | 'n-resize'
    | 's-resize'
    | 'e-resize'
    | 'w-resize',
  stopPropagation?: boolean,
) => {
  const onMouseDown = (clickEvent: React.MouseEvent<Element, MouseEvent>) => {
    if (stopPropagation) clickEvent.stopPropagation();

    document.querySelector('body')?.style.setProperty('cursor', cursorType);

    const mouseMoveHandler = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.screenX - clickEvent.screenX;
      const deltaY = moveEvent.screenY - clickEvent.screenY;
      onDragChange(deltaX, deltaY);
    };

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.querySelector('body')?.style.setProperty('cursor', 'auto');
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler, { once: true });
  };

  return onMouseDown;
};
