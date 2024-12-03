import styled from "styled-components";
const Header = (props) => (
	<Container>
		<Content>
			<Logo>
				<a href="/home">
					<img src="../images/linkedin-svgrepo-hung.svg" alt="Logo" />
				</a>
			</Logo>
			<Search>
				<div>
					<input type="text" placeholder="Search" />
				</div>
				<SearchIcon>
					<img src="../images/search-icon.svg" alt="Search Icon" />
				</SearchIcon>
			</Search>
			<Nav>
				<NavListWrap>
					<NavList className="active">
						<a href="/">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="#666666"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
										fill="#666666"
									></path>{" "}
								</g>
							</svg>
							<span>Home</span>
						</a>
					</NavList>
					<NavList className="active">
						<a href="/">
							<svg
								width="24px"
								height="24px"
								viewBox="-0.5 0 25 25"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z"
										stroke="#666666"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
									<path
										d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z"
										stroke="#666666"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
									<path
										d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z"
										stroke="#666666"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
									<path
										d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z"
										stroke="#666666"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
								</g>
							</svg>
							<span>My Network</span>
						</a>
					</NavList>
					<NavList>
						<a href="/">
							<svg
								width="24px"
								height="24px"
								fill="#666666"
								viewBox="-5.5 0 32 32"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<title>bag</title>{" "}
									<path d="M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719s-7.656-0.625-10.625-1.719v-3.75c0-0.688 0.563-1.25 1.25-1.25h5.156v-0.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v0.938h5.156c0.688 0 1.25 0.563 1.25 1.25zM7.969 9.875v0.938h5.313v-0.938c0-0.594-0.5-1.094-1.094-1.094h-3.125c-0.594 0-1.094 0.5-1.094 1.094zM9.063 15.594v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-0.594 10.625-1.625v6.813c0 0.688-0.563 1.25-1.25 1.25h-18.75c-0.688 0-1.25-0.563-1.25-1.25zM12.188 20.75v-0.625c0-0.188-0.125-0.313-0.313-0.313h-2.5c-0.188 0-0.313 0.125-0.313 0.313v0.625c0 0.188 0.125 0.313 0.313 0.313h2.5c0.188 0 0.313-0.125 0.313-0.313z"></path>{" "}
								</g>
							</svg>
							<span>Jobs</span>
						</a>
					</NavList>
					<NavList>
						<a href="/">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										d="M10 9H17M10 13H17M7 9H7.01M7 13H7.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z"
										stroke="#666666"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
								</g>
							</svg>
							<span>Messaging</span>
						</a>
					</NavList>
					<NavList>
						<a href="/">
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
								<g
									id="SVGRepo_tracerCarrier"
									stroke-linecap="round"
									stroke-linejoin="round"
								></g>
								<g id="SVGRepo_iconCarrier">
									{" "}
									<path
										d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
										stroke="#000000"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>{" "}
								</g>
							</svg>
							<span>Notifications</span>
						</a>
					</NavList>
					<User></User>
				</NavListWrap>
			</Nav>
			{/* Bạn có thể thêm các phần tử khác vào đây */}
		</Content>
	</Container>
);

const Container = styled.header`
	background-color: #fff;
	padding: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	position: fixed;
	width: 100%;
	z-index: 100;
	top: 0; /* Đảm bảo header cố định ở đầu trang */
`;
// ======logo======
const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between; /* Căn đều không gian giữa các phần tử */
	margin: 0 auto;
	max-width: 1128px;
	min-height: 100%;
`;

const Logo = styled.span`
	img {
		height: 3.1rem;
		width: 3.1rem;
		margin-right: 8px;
		font-size: 0px;
	}
`;
// ======Search======
const Search = styled.div`
	opacity: 1;
	flex-grow: 1;
	position: relative;
	& > div {
		max-width: 280px;
		input {
			padding: 12px 20px;
			border: none;
			box-shadow: none;
			border-radius: 2px;
			font-size: 16px;
			background-color: #eef3f8;
			color: rgba(0, 0, 0, 0.9);
			width: 218px;
			padding: 0 8px 0 40px;
			line-height: 1.75;
			transition: background-color 0.3s ease;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			border-color: #dce6f1;
			vertical-align: text-top;
		}
	}
`;
const SearchIcon = styled.div`
	position: absolute;
	top: 10%;
	left: 4%;
	z-index: 1;
	border-radius: 0 2px 2px 0;
	margin: 0;
	pointer-events: none;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: background-color 0.3s ease;
	& > img {
		width: 25px;
		margin-right: 8px;
		cursor: pointer;
	}
`;
const Nav = styled.nav`
	margin-left: auto;
	display: block;
	@media (max-width: 767px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: white;
		width: 100%;
		span {
		}
	}
`;
const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style-type: none;
	li.active {
		position: relative;
		span:after {
			content: "";
			transform: scaleX(1);
			border-bottom: 2px solid #666666;
			bottom: 0;
			left: 0;
			position: absolute;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`;
const NavList = styled.li`
	display: flex;
	align-items: center;

	a {
		align-items: center;
		background: transparent;
		display: flex;
		flex-direction: column;
		font-size: 12px;
		font-weight: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 42px;
		min-width: 80px;
		position: relative;
		text-decoration: none;

		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
		}

		@media (max-width: 768px) {
			min-width: 78px;
		}
	}

	&.active {
		&:hover {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
			svg {
				fill: #000000; /* Thay đổi màu fill của svg khi hover */
			}
		}
	}
`;

const User = styled.div``;
// const Nav45 = styled.div`
// `;
export default Header;
