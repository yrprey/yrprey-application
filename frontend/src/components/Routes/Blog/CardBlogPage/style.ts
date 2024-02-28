import styled from "styled-components";

export const CardBlogPageContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 0 0 60px 0;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 0 40px 0;
  }
`;

export const CardBlogPageItem = styled.li`
    width: 100%;
    height: auto;
    background: var(--gradient-color);
    border-radius: 5px;
`;

export const CardBlogPageItemContent = styled.div` 
`;

export const CardBlogPageItemContainer = styled.div`
    .card-blog-page-main-link {
      text-decoration: none;
      text-transform: none;
    }
`;

export const CardBlogPageItemMainContent = styled.div`
    width: 100%;
    height: 450px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 5px;

    .card-blog-page-main-img {
      position: absolute;
      width: inherit;
      height: auto;
      background-color: var(--grey-5);
    }
    .content-top-details-main {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .content-details-main {
      display: flex;
      flex-direction: column;
      position: absolute;
      bottom: 0;
      justify-content: flex-end;
      gap: 20px;
      padding: 20px 40px;
      z-index: 2;
      color: var(--white);
      background: linear-gradient(90deg, rgba(129,129,129,.3) 0%, rgba(78,78,78,.3) 100%);
      backdrop-filter: blur( 13.5px );
      -webkit-backdrop-filter: blur( 13.5px );
    }
    .card-blog-page-main-title {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    .card-blog-page-main-description {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp:2;
      -webkit-box-orient: vertical;
    }
    @media (max-width: 1024px) {
      height: 160px;
    .content-top-details-main {
      display: flex;
      gap: 12px;
    }
    .content-details-main {
      gap: 12px;
      padding: 16px;
    }
    .card-blog-page-main-title {
      font-size: 24px;
    }

    .card-blog-page-main-description {
      font-size: 16px;
    }
  }
`;

export const CardBlogPageItemContentTop = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    height: 250px;
    background-color: var(--grey-5);
    .content-top-details {
      width: 100%;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      background: linear-gradient(90deg, rgba(129,129,129,.3) 0%, rgba(78,78,78,.3) 100%);
      backdrop-filter: blur( 13.5px );
      -webkit-backdrop-filter: blur( 13.5px );
    }
    .card-blog-page-img {
      width: inherit;
      height: min-content;
      object-fit: cover;
      background-color: var(--grey-5);
    }
    .card-blog-page-font {
      color: var(--white);
      font-weight: 900;
    }
  
    .card-blog-page-date {
      color: var(--white);
      font-weight: 900;
    }
    @media (max-width: 1024px) {
      height: 210px;
    .content-top-details {
      padding: 16px;
    }
    .card-blog-page-font {
      font-size: 12px;
    }
  
    .card-blog-page-date {
      font-size: 12px;
    }
  }
`;

export const CardBlogPageItemContentBottom = styled.div`
    width: 100%;
    padding: 20px;
    height: 250px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px;
    color: var(--white);
    .card-blog-page-title {
      font-weight: 900;
      font-size: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;  
      -webkit-box-orient: vertical; 
    }
    .card-blog-page-description {
      letter-spacing: 2px;
      margin-bottom: 15px;
      color: var(--quartenary-color);
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 6;  
      -webkit-box-orient: vertical; 
    }
    .card-blog-page-link {
      width: max-content;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 5px;
      text-decoration: none;
      text-transform: none;
      color: var(--white);
    }
    .card-blog-page-link::before {
      position: absolute;
      left: 0;
      bottom: -2px;
      content: "";
      width: 0;
      height: 2px;
      transition: all .3s ease;
      background-color: var(--white);
    }
    .card-blog-page-link:hover::before {
      width: 100%;
    }
    @media (max-width: 1024px) {
      padding: 16px;
      gap: 8px;
      height: 200px;
    .card-blog-page-title {
      font-size: 18px;
    }
    .card-blog-page-description {
      font-size: 14px;
      margin-bottom: 8px;
    }
    .card-blog-page-link {
      font-size: 14px;
    }
  }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    .loader {
      border: 4px solid var(--primary-color);
      border-left-color: transparent;
      border-radius: 50%;
    }

    .loader {
      border: 4px solid var(--primary-color);
      border-left-color: transparent;
      width: 36px;
      height: 36px;
    }

    .loader {
      border: 4px solid var(--primary-color);
      border-left-color: transparent;
      width: 36px;
      height: 36px;
      animation: spin89345 1s linear infinite;
    }

    @keyframes spin89345 {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
`;

