import styled from "styled-components";
const LanguageSelector = () => {
	return (
		<LanguageDropdown>
			<LanguageButton>
				Language <span>▼</span>
			</LanguageButton>
			<DropdownContent>
				<LanguageOption>العربية (Arabic)</LanguageOption>
				<LanguageOption>বাংলা (Bangla)</LanguageOption>
				<LanguageOption>Čeština (Czech)</LanguageOption>
				<LanguageOption>Dansk (Danish)</LanguageOption>
				<LanguageOption>Deutsch (German)</LanguageOption>
				<LanguageOption selected>English (English)</LanguageOption>
				<LanguageOption>Español (Spanish)</LanguageOption>
				<LanguageOption>Français (French)</LanguageOption>
				<LanguageOption>हिंदी (Hindi)</LanguageOption>
				{/* Thêm các ngôn ngữ khác tương tự */}
			</DropdownContent>
		</LanguageDropdown>
	);
};
// ========
const Footer = () => {
	return (
		<FooterWrapper>
			<FooterContent>
				<Logo>
					<img src="./images/login-logo.svg" alt="LinkedIn" />
				</Logo>
				<FooterSection>
					<FooterTitle>General</FooterTitle>
					<FooterList>
						<FooterItem>Sign Up</FooterItem>
						<FooterItem>Help Center</FooterItem>
						<FooterItem>About</FooterItem>
						<FooterItem>Press</FooterItem>
						<FooterItem>Blog</FooterItem>
						<FooterItem>Careers</FooterItem>
						<FooterItem>Developers</FooterItem>
					</FooterList>
				</FooterSection>
				<FooterSection>
					<FooterTitle>Browse LinkedIn</FooterTitle>
					<FooterList>
						<FooterItem>Learning</FooterItem>
						<FooterItem>Jobs</FooterItem>
						<FooterItem>Games</FooterItem>
						<FooterItem>Salary</FooterItem>
						<FooterItem>Mobile</FooterItem>
						<FooterItem>Services</FooterItem>
						<FooterItem>Products</FooterItem>
						<FooterItem>Top Companies Hub</FooterItem>
					</FooterList>
				</FooterSection>
				<FooterSection>
					<FooterTitle>Business Solutions</FooterTitle>
					<FooterList>
						<FooterItem>Talent</FooterItem>
						<FooterItem>Marketing</FooterItem>
						<FooterItem>Sales</FooterItem>
						<FooterItem>Learning</FooterItem>
					</FooterList>
				</FooterSection>
				<FooterSection>
					<FooterTitle>Directories</FooterTitle>
					<FooterList>
						<FooterItem>Members</FooterItem>
						<FooterItem>Jobs</FooterItem>
						<FooterItem>Companies</FooterItem>
						<FooterItem>Featured</FooterItem>
						<FooterItem>Learning</FooterItem>
						<FooterItem>Posts</FooterItem>
						<FooterItem>Articles</FooterItem>
						<FooterItem>Schools</FooterItem>
						<FooterItem>News</FooterItem>
						<FooterItem>News Letters</FooterItem>
						<FooterItem>Services</FooterItem>
						<FooterItem>Products</FooterItem>
						<FooterItem>Advice</FooterItem>
						<FooterItem>People Search</FooterItem>
					</FooterList>
				</FooterSection>
				{/* Thêm các phần khác tương tự */}
			</FooterContent>
			<FooterBottom>
				<LogoBot>
					<FooterBottomItemH>
						<img src="./images/linkedin-logo-svgrepo-com.svg" alt="LinkedIn" />
					</FooterBottomItemH>
					<FooterBottomItemH>About</FooterBottomItemH>
					{/* Thêm các mục khác tương tự */}
					<FooterBottomItemH>About</FooterBottomItemH>
					<FooterBottomItemH>Accessibility</FooterBottomItemH>
					<FooterBottomItemH>User Agreement</FooterBottomItemH>
					<FooterBottomItemH>Copyright Policy</FooterBottomItemH>
					<FooterBottomItemH>Brand Policy</FooterBottomItemH>
					<FooterBottomItemH>Guest Controls</FooterBottomItemH>
					<FooterBottomItemH>Community Guidelines</FooterBottomItemH>
					<FooterBottomItemH>Privacy Policy</FooterBottomItemH>
					<FooterBottomItemH>Cookie Policy</FooterBottomItemH>
					<LanguageSelector />
					
				</LogoBot>
			</FooterBottom>
		</FooterWrapper>
	);
};

// const Footer = styled.div`
// 	flex-direction: row;
// 	align-content: start;
// 	min-height: 700px;
// 	padding-bottom: 138px;
// 	padding-top: 40px;
// 	padding: 60px 0;
// 	flex-wrap: wrap;
// 	width: 100%;
// 	max-width: 1128px;
// 	align-items: center;
// 	text-align: left;
// 	margin: 0 auto;
// 	line-height: 2.3;
// 	@media (min-width: 768px) {
// 		flex-direction: column;
// 		align-content: start;
// 	}
// `;
const FooterContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row;
		align-content: start;
	}
`;
const Logo = styled.div`
	display: flex;
	align-items: flex-start;
	margin: -23px 0;
	img {
		width: 84px;
		margin-right: 8px;
	}
`;
const FooterTitle = styled.h3`
	color: rgba(0, 0, 0, 0.9);
	font-size: 16;
	line-height: 2.25;
	cursor: pointer;
`;
const FooterItem = styled.li`
	color: rgba(0, 0, 0, 0.6);
	font-size: 0.9rem;
	line-height: 1.85;
	cursor: pointer;
	&:hover {
		color: #0a66c2;
		text-decoration: underline;
	}
`;
const FooterList = styled.ul``;

const FooterSection = styled.div``;
// const FooterBottomItem = styled.li`
// 	color: rgba(0, 0, 0, 0.6);
// 	font-size: 0.9rem;
// 	line-height: 1.85;
// 	cursor: pointer;
// 	list-style: none;
// 	line-height: 2.5;
// 	&:hover {
// 		color: #0a66c2;
// 		text-decoration: underline;
// 	}
// `;

const FooterBottomItemH = styled.div`
	display: flex;
	margin-right: 10px;
	align-items: center;
	height: 86px;
	line-height: 86px;
	&:hover {
		color: #0a66c2;
		text-decoration: underline;
	}
`;
const FooterBottom = styled.div`
	width: 100%;
	padding: 10px 0px; /* Khoảng cách bên trong */
	position: sticky;
	bottom: 0;
	z-index: 1000;
	transform: translateY(100%);
	transition: transform 0.3s ease-in-out;
	&.visible {
		transform: translateY(0);
	}
`;
const LogoBot = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap; /* Để đảm bảo các phần tử sẽ xuống dòng khi cần thiết */
	justify-content: space-between; /* Căn đều khoảng cách giữa các phần tử */
	align-items: center;
	max-width: 1200px; /* Giới hạn chiều rộng nếu cần */
	margin: 0 auto; /* Để căn giữa LogoBot trong FooterBottom */
	@media (min-width: 768px) {
		flex-direction: row;
		align-items: flex-start;
	}
	img {
		width: 84px;
		margin-right: 8px;
	}
	div {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.6);
		margin-top: -14px;
	}
`;
const LanguageDropdown = styled.div`
	position: relative;
	display: inline-block;
	line-height: 86px;
`;

const LanguageButton = styled.button`
	background-color: transparent;
	color: rgba(0, 0, 0, 0.6);
	font-size: 14px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: flex-start;
	span {
		margin-left: 5px;
	}
`;

const DropdownContent = styled.div`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	z-index: 1;
	max-height: 300px;
	overflow-y: auto;
	bottom: 100%; /* Đặt dropdown ngược lên trên */

	${LanguageDropdown}:hover & {
		display: block;
	}
`;

const LanguageOption = styled.a`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	font-size: 14px;

	&:hover {
		background-color: #f1f1f1;
	}

	${(props) =>
		props.selected &&
		`
    background-color: #0a66c2;
    color: white;

    &:hover {
      background-color: #0a66c2;
    }
  `}
`;

const FooterWrapper = styled.div`
	flex-direction: row;
	align-content: start;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1128px;
	align-items: center;
	text-align: left;
	margin: 0 auto;
	line-height: 2.3;
    padding: 0 16px;
    
    ${'' /* height:300px; */}
	@media (min-width: 768px) {
		flex-direction: column;
		align-content: start;
        padding: 0 16px;
	}
`;
export default Footer;
