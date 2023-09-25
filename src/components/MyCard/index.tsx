import React from 'react'
import './index.css'
import {
	IconFolder,
	IconMoreVertical,
	IconLoading,
	IconCheckCircle,
	IconCloseCircle,
	IconPlayCircle,
} from '@arco-design/web-react/icon'
import { Card, Tag, Button } from '@arco-design/web-react'
interface MyCardInterFace {
	firstName: string
	secondName: string
	desc: string
	// 1: success 2:loading 3:queued 4:failed
	type: number
	time: number
}
const MyCard: React.FC<MyCardInterFace> = (props) => {
	const { firstName, secondName, desc, time, type }: MyCardInterFace = props
	return (
		<div>
			<Card className="my_card">
				<div className="c_header">
					<div className="c_avatar">
						<IconFolder />
					</div>
					<div className="c_title">
						<span className="first_name">{firstName}</span>
						<span> / </span>
						<span className="second_name">{secondName}</span>
					</div>
				</div>
				<div className="c_desc">{desc}</div>
				<div className="c_tag_controller">
					{type === 1 && (
						<Tag
							style={{ marginRight: 8 }}
							className="success_tag"
							icon={<IconCheckCircle style={{ color: '#00B42A' }} />}
						>
							Ready
						</Tag>
					)}
					{type === 2 && (
						<Tag
							style={{ marginRight: 8 }}
							className="loading_tag"
							icon={<IconLoading style={{ color: '#FF7D00' }} />}
						>
							Loading: 84%
						</Tag>
					)}
					{type === 3 && (
						<Tag
							style={{ marginRight: 8 }}
							className="queued_tag"
							icon={<IconPlayCircle style={{ color: '#0FC6C2' }} />}
						>
							Queued
						</Tag>
					)}
					{type === 4 && (
						<Tag
							style={{ marginRight: 8 }}
							className="fail_tag"
							icon={<IconCloseCircle style={{ color: '#F53F3F' }} />}
						>
							Failed
						</Tag>
					)}
					<div className="time">{time} min ago</div>
					<div className="button_group">
						<Button type="outline" size="mini">
							View
						</Button>
						<Button
							size="mini"
							type="outline"
							icon={<IconMoreVertical />}
							style={{ marginLeft: 8 }}
						></Button>
					</div>
				</div>
			</Card>
		</div>
	)
}
export default MyCard
