import {
  ButtonPage,
  PaginatiosContainer,
  PaginatiosContent,
  PaginatiosWrapper,
} from "./styled";
import {
  CaretDoubleLeft,
  CaretLeft,
  CaretRight,
  CaretDoubleRight,
} from "phosphor-react";

interface PagesPros {
  currentPage: number;
  setCurrentPage: (pages: number) => void;
  totalPage: number;
}

export function Paginate({
  currentPage,
  totalPage,
  setCurrentPage,
}: PagesPros) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
  function handlePreviousLastpage() {
    if (currentPage < totalPage) {
      setCurrentPage(totalPage);
    }
  }
  function handlePreviousFirstpage() {
    if (currentPage <= totalPage) {
      setCurrentPage(1);
    }
  }
  function setPageinClick(page: number) {
    setCurrentPage(page);
  }
  function handlePreviouspage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <PaginatiosContainer>
      <ButtonPage
        onClick={handlePreviousFirstpage}
        disabled={currentPage === 1}
      >
        <CaretDoubleLeft size={24} />
      </ButtonPage>

      <ButtonPage onClick={handlePreviouspage} disabled={currentPage === 1}>
        <CaretLeft size={24} />
      </ButtonPage>
      <PaginatiosWrapper>
        {pageNumbers.map((number) => (
          <PaginatiosContent
            onClick={() => setPageinClick(number)}
            active={number == currentPage}
            key={number}
          >
            {number}
          </PaginatiosContent>
        ))
      }
      </PaginatiosWrapper>
      <ButtonPage onClick={handleNextPage} disabled={currentPage === totalPage}>
        <CaretRight size={24} />
      </ButtonPage>
      <ButtonPage
        onClick={handlePreviousLastpage}
        disabled={currentPage === totalPage}
      >
        <CaretDoubleRight size={24} />
      </ButtonPage>
    </PaginatiosContainer>
  );
}
