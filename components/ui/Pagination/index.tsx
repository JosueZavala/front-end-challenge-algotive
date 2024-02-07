import { useEffect } from "react";
import { useState } from "react";
import PaginationButton from "./PagintionButton";

type PaginationProps = {
  totalPages: number;
  pageSelected: number;
  setPageSelected: (page: number) => void;
};

const Pagination = ({
  totalPages,
  pageSelected,
  setPageSelected,
}: PaginationProps) => {
  const [paginationButtons, setPaginationButtons] = useState<
    JSX.Element | JSX.Element[] | undefined
  >(<></>);

  const createPaginationButtons = () => {
    if (totalPages <= 5) {
      return createNormalPagination();
    }
    if (pageSelected <= 4) {
      return createRightThreeDots();
    }
    if (pageSelected + 3 >= totalPages) {
      return createLeftThreeDots();
    }
    if (pageSelected > 4 && pageSelected + 3 < totalPages) {
      return createBetweenThreeDots();
    }
  };

  const createNormalPagination = () => {
    const paginationArray = [];
    for (let i = 0; i < totalPages; i++) {
      paginationArray.push(createNumberButton(i + 1));
    }
    return paginationArray;
  };

  const createRightThreeDots = () => {
    const paginationArray = [];
    for (let i = 0; i < 5; i++) {
      paginationArray.push(createNumberButton(i + 1));
    }
    paginationArray.push(
      <PaginationButton
        key={`right_pagination_threeDots`}
        icon={`...`}
        threeDots
      />
    );
    paginationArray.push(createNumberButton(totalPages));
    return paginationArray;
  };

  const createBetweenThreeDots = () => {
    const paginationArray = [];

    paginationArray.push(createNumberButton(1));

    paginationArray.push(
      <PaginationButton
        key={`left_pagination_threeDots`}
        icon={`...`}
        threeDots
      />
    );

    for (let i = pageSelected - 2; i < pageSelected + 1; i++) {
      paginationArray.push(createNumberButton(i + 1));
    }

    paginationArray.push(
      <PaginationButton
        key={`right_pagination_threeDots`}
        icon={`...`}
        threeDots
      />
    );

    paginationArray.push(createNumberButton(totalPages));
    return paginationArray;
  };

  const createLeftThreeDots = () => {
    const paginationArray = [];

    paginationArray.push(createNumberButton(1));

    paginationArray.push(
      <PaginationButton
        key={`left_pagination_threeDots`}
        icon={`...`}
        threeDots
      />
    );

    for (let i = totalPages - 5; i < totalPages; i++) {
      paginationArray.push(createNumberButton(i + 1));
    }
    return paginationArray;
  };

  const createNumberButton = (number: number) => (
    <PaginationButton
      key={`pagination_button${number}`}
      icon={number}
      selected={number === pageSelected}
      handleOnclick={() => setPageSelected(number)}
    />
  );

  useEffect(() => {
    setPaginationButtons(createPaginationButtons());
  }, [totalPages, pageSelected]);

  return (
    <div className="flex flex-row gap-x-2 mt-4 mb-8">
      <PaginationButton
        icon={`<`}
        disabled={pageSelected === 1}
        handleOnclick={() => setPageSelected(pageSelected - 1)}
      />
      {paginationButtons}
      <PaginationButton
        icon={`>`}
        disabled={pageSelected === totalPages}
        handleOnclick={() => setPageSelected(pageSelected + 1)}
      />
    </div>
  );
};

export default Pagination;
