import React from 'react'
import './App.css'
import {
	Breadcrumb,
	Radio,
	Button,
	Input,
	Pagination,
} from '@arco-design/web-react'
import { IconPlus, IconFilter } from '@arco-design/web-react/icon'
import MyCard from './components/MyCard/index'
const RadioGroup = Radio.Group
const BreadcrumbItem = Breadcrumb.Item
const InputSearch = Input.Search
const App: React.FC = () => {
	const testArr = [
		{
			id: 1,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 1,
			time: 24,
		},
		{
			id: 2,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 1,
			time: 24,
		},
		{
			id: 3,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 1,
			time: 24,
		},
		{
			id: 4,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 2,
			time: 24,
		},
		{
			id: 5,
			firstName: 'OpenAI',
			secondName: 'Whisper',
			desc: 'This repo does not have an intro.',
			type: 3,
			time: 4,
		},
		{
			id: 6,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 1,
			time: 24,
		},
		{
			id: 7,
			firstName: 'geekan',
			secondName: 'MetaGPT',
			desc: 'This repo does not have an intro.',
			type: 4,
			time: 24,
		},
		{
			id: 8,
			firstName: 'geekan',
			secondName: 'MetaGPT',
			desc: 'This repo does not have an intro.',
			type: 4,
			time: 24,
		},
		{
			id: 9,
			firstName: 'YORG',
			secondName: 'new-backend',
			desc: 'The Multi-Agent Framework: Given one line Requirement, return PRD, Design, ...',
			type: 1,
			time: 24,
		},
		{
			id: 10,
			firstName: 'OpenAI',
			secondName: 'Whisper',
			desc: 'This repo does not have an intro.',
			type: 3,
			time: 4,
		},
		{
			id: 11,
			firstName: 'OpenAI',
			secondName: 'Whisper',
			desc: 'This repo does not have an intro.',
			type: 3,
			time: 4,
		},
		{
			id: 12,
			firstName: 'geekan',
			secondName: 'MetaGPT',
			desc: 'This repo does not have an intro.',
			type: 4,
			time: 24,
		},
	]
	return (
		<div className="container">
			<div className="header">
				<Breadcrumb>
					<BreadcrumbItem>Codebase</BreadcrumbItem>
					<BreadcrumbItem>List of Repos</BreadcrumbItem>
				</Breadcrumb>
				<RadioGroup type="button" name="lang" defaultValue="Card">
					<Radio value="Card">Card</Radio>
					<Radio value="List">List</Radio>
				</RadioGroup>
			</div>
			<div className="main">
				<div className="main_header">
					<div className="left_button">
						<Button
							type="primary"
							style={{ marginRight: '12px' }}
							icon={<IconPlus />}
						>
							Add Repo
						</Button>
						<Button type="outline" icon={<IconFilter />}>
							Filter
						</Button>
					</div>
					<div className="right_search">
						<InputSearch
							allowClear
							placeholder="Enter keyword to search"
							style={{ width: 220 }}
						/>
					</div>
				</div>
				<div className="main_wrapper">
					{testArr.map((item) => (
						<MyCard
							firstName={item.firstName}
							secondName={item.secondName}
							desc={item.desc}
							type={item.type}
							time={item.time}
						></MyCard>
					))}
				</div>
				<div className="page_container">
					<Pagination simple total={50} size="small" />
				</div>
			</div>
		</div>
	)
}
export default App
