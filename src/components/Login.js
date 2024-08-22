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
const Login = (props) => {
	return (
		<Container>
			<Nav>
				<a href="/">
					<img src="/images/login-logo.svg" alt="Login Logo" />
				</a>
				<div class="">
					<Join>Join now</Join>
					<Signin>Sign in</Signin>
				</div>
			</Nav>
			<Section>
				<Hero>
					<ContentWrapper>
						<HeroTitle>Welcome to your professional community</HeroTitle>
						<Form>
							<Google>
								<img src="./images/google-svgrepo-com.svg" alt="Google Icon" />
								<span>Sign in with Google</span>
							</Google>
							<SigniN>Sign in with email</SigniN>
							<Signintext>
								By clicking Continue to join or sign in, you agree to LinkedIn’s{" "}
								<a href="/">User</a> <a href="/">Agreement</a>,{" "}
								<a href="/">Privacy Policy</a>, and{" "}
								<a href="/">Cookie Policy.</a>
							</Signintext>
							<SigninNew>
								New to LinkedIn? <a href="/">Join now</a>
							</SigninNew>
						</Form>
					</ContentWrapper>
					<ImageWrapper>
						<img src="./images/logo-header.svg" alt="Welcome Logo" />
					</ImageWrapper>
				</Hero>
			</Section>
			<Footer>
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
				</FooterContent>
				<FooterBottom>
					<LogoBot>
						<FooterBottomItemH>
							<img
								src="./images/linkedin-logo-svgrepo-com.svg"
								alt="LinkedIn"
							/>
						</FooterBottomItemH>
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
			</Footer>
		</Container>
	);
};

const Container = styled.div`
	padding: 0;
	overflow-x: hidden;
	width: 100%;
	max-width: 100%;
	min-width: 364px;
	padding-left: 16px;
	padding-right: 16px;
	@media (max-width: 767px) {
		padding-left: 16px;
		padding-right: 16px;
	}
`;
const Nav = styled.nav`
	padding: 12px 0 16px;
	max-width: 1128px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	flex-wrap: nowrap;

	& > a {
		width: 135px;
		height: 35px;
		display: flex;
		align-items: center;
		justify-content: center;
		& > img {
			width: 100%;
			height: auto;
		}
		@media (max-width: 768px) {
			padding: 0 5px;
		}
	}
`;
const Join = styled.a`
	font-size: 16px;
	padding: 10px 12px;
	text-decoration: none;
	color: rgba(0, 0, 0, 0.6);
	margin-right: 12px;
	cursor: pointer;
	border-radius: 4px;
	font-weight: 500;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
		color: rgba(0, 0, 0, 0.9);
		text-decoration: none;
	}
`;
const Signin = styled.a`
	font-size: 16px;
	padding: 10px 12px;
	text-decoration: none;
	box-shadow: inset 0 0 0 1px #0a66c2;
	border-radius: 4px;
	color: #0a66c2;
	transition-duration: 176ms;
	cursor: pointer;
	font-weight: 683;
	line-height: 48px;
	text-align: center;
	background-color: rgba(0, 0, 0, 0);
	&:hover {
		background-color: rgba(112, 181, 249, 0.15);
		color: #0a66c2;
		text-decoration: none;
	}
`;
const Section = styled.section`
	align-content: start;
	display: flex;
	min-height: 700px;
	padding-bottom: 138px;
	padding-top: 40px;
	padding: 60px 0;
	flex-wrap: wrap;
	width: 100%;
	max-width: 1128px;
	align-items: center;
	margin: 0 auto;
	@media (max-width: 768px) {
		margin: auto;
		min-height: auto; // Thay đổi từ 0px thành auto
		padding: 0; // Giảm padding trên mobile
	}
`;
const Hero = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: start;
	position: relative;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ContentWrapper = styled.div`
	width: 55%;
	z-index: 1;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

const HeroTitle = styled.h1`
	font-size: 56px;
	line-height: 1.2;
	font-weight: 600;
	color: #526a6e;
	padding-bottom: 0;
	text-align: start;

	@media (max-width: 768px) {
		font-size: 32px;
		width: 100%;
		line-height: 1.25;
		padding: 20px 16px;
		text-align: center;
	}
	@media (max-width: 368px) {
		padding: 0px 5px 23px 5px;
		font-size: 24px;
	}
`;

const Form = styled.div`
	max-width: 400px;
	width: 100%;
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: 0;
	margin-top: 30px;
	position: relative;
	@media (max-width: 768px) {
		padding-top: 40px;
		padding: 0 16px;
		margin: auto;
	}
`;

const Button = styled.button`
	border: 1px solid #dadce0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 56px;
	color: #3c4043;
	border-radius: 20px;
	background-color: white;
	transition-duration: 176ms;
	font-size: 1.1rem;
	cursor: pointer;
	@media (min-width: 368px) {
		height: 40px;
		font-size: 1rem;
	}
	&:hover {
		box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%);
		color: rgba(0, 0, 0, 0.75);
	}
`;

const Google = styled(Button)`
	margin-bottom: 20px;

	img {
		width: 20px;
		height: 20px;
		margin-right: 8px;
	}

	span {
		white-space: nowrap;
		@media (min-width: 768px) {
			white-space: normal;
			line-height: 1;
			margin-right: 0;
			font-size: 1.1rem;
		}
	}
	@media (min-width: 768px) {
		argin-bottom: 10px;
	}
`;

const SigniN = styled(Button)``;

const ImageWrapper = styled.div`
	position: absolute;
	right: -10%; // Sử dụng phần trăm thay vì pixel
	top: 40px;
	width: 100%;
	max-width: 700px;
	@media (max-width: 991px) {
		right: -30%;
	}

	@media (max-width: 768px) {
		position: static;
		width: 100%;
		margin-top: 20px;
		padding: 0 16px;
	}

	${
		"" /* img {
		width: 100%;
		height: auto;
	} */
	}
`;
const Signintext = styled.div`
	font-size: 12px;
	text-align: center;
	margin-top: 40px;
	color: rgba(0, 0, 0, 0.6);
	line-height: 1.4;
	@media (max-width: 768px) {
		font-size: 12px;
		margin-top: 20px;
	}
	& > a {
		font-size: 13px;
		color: #0a66c2;
		font-weight: 600;
		&:hover {
			color: #0a66c2;
			text-decoration: underline;
		}
	}
`;
const SigninNew = styled.div`
	margin-top: 20px;
	text-align: center;

	@media (max-width: 768px) {
		margin-top: 16px;
		cursor: pointer;
	}
	& > a {
		color: #0a66c2;
		font-size: 16px;
		font-weight: 600;
		&:hover {
			color: #0a66c2;
			text-decoration: underline;
		}
	}
`;
const Footer = styled.div`
	flex-direction: row;
	align-content: start;
	min-height: 700px;
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
	@media (min-width: 768px) {
		flex-direction: column;
		align-content: start;
	}
`;
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
export default Login;
