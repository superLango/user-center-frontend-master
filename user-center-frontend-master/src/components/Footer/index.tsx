import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = '兰戈出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '知识星球',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Lango GitHub</>,
          href: 'https://github.com/superLango',
          blankTarget: true,
        },
        {
          key: '备案号',
          title: <>陇ICP备2023001048号-1</>,
          href: 'https://beian.miit.gov.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
