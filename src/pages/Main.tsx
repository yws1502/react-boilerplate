import { useState } from 'react';

import Alert from 'components/common/Alert';
import Confirm from 'components/common/Confirm';
import { useAlert } from 'hooks/useAlert';
import { useConfirm } from 'hooks/useConfirm';
import { useOutsideRef } from 'hooks/useOutsideRef';

function Main() {
  const [toggle, setToggle] = useState(false);

  const { confirm } = useConfirm(Confirm);
  const { alert } = useAlert(Alert);

  const outsideRef = useOutsideRef<HTMLDivElement>(() => setToggle(false));

  return (
    <section>
      <h2>woosang&apos;s playground</h2>
      <section>
        <div>Confirm Dialog</div>
        <button
          type="button"
          onClick={async () => {
            const result = await confirm({
              title: '정말 삭제할까요?',
              message: '삭제하면 되돌릴 수 없습니다.',
            });

            console.info(result);
          }}
        >
          confirm
        </button>
        <div>Alert Dialog</div>
        <button
          type="button"
          onClick={() => {
            alert({
              message: '확인해주세요.',
              type: 'success',
            });
          }}
        >
          alert
        </button>
        <div>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setToggle(!toggle);
            }}
          >
            open
          </button>

          {toggle && (
            <div ref={outsideRef} className="size-52 bg-red-300">
              test
            </div>
          )}
        </div>
      </section>
      {/* 
      - useConfirm (promise 사용)
      - useAlert
      - useToast
      > 과제 전형에선 따로 개발 진행 후 Refactoring 시간에 합치는거 고민해보기 (useOverlay와 같이 구현할 것을 생각해보기)

        1. overlay를 열고, 닫는 함수가 구현되어 있음. overlay의 visible 정보 담당
        (confirm, alert, toast에선 각 기능에 집중하여, 상황에 맞게 open, close를 사용함. - confirm의 경우 promise도 활용 가능함.)
        -> 내부적으로 global portal을 활용하여 렌더링되는 돔 위치는 최상단임을 보장함.
        config로 마스크 사용 여부를 설정함.

        open 함수에서 컴포넌트를 주입함.

      */}
    </section>
  );
}

export default Main;
