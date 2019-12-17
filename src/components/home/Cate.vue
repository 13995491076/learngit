<template>
	<div class="cate">
		<div class="boy">
			<div>男生</div>
			<ul>
			<li v-for="(item,index) in list" :key="index" v-show="item.sex==1">
				<router-link :to="'/list?p='+item.name+'&&id='+item.id">
					<span>{{item.name}}<br>
						<span>{{item.count}}</span>
					</span>
				</router-link>
				
			</li>
			</ul>
		</div>
		<div class="girl">
			<div>女生</div>
			<ul>
			<li v-for="(item,index) in list" :key="index" v-show="item.sex==0">
				<router-link :to="'/list?p='+item.name+'&&id='+item.id">
					<span>{{item.name}}<br>
						<span>{{item.count}}</span>
					</span>
				</router-link>
			</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			list:[]
			}
		},
		mounted(){
			this.$axios.get("/cate.json").then((res)=>{
			this.list=res.data
			})
		}

	}
</script>

<style lang="scss">
	.cate{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		.boy,.girl{
			width: 97%;
			margin: 0 0.2rem;
			div{
				width: 100%;
				height: 0.7rem;
				font-size: 0.34rem;
				line-height: 0.7rem;
				border-bottom: 0.01rem solid #ccc;
			}
			ul{
				width: 100%;
				li{
					float: left;
					width: 33%;
					height: 1.5rem;
					line-height:0.5rem;
					text-align: center;
					border-bottom: 0.01rem solid #ccc;
					a{
						text-decoration: none;
						color: black;margin:auto 0;
						span{
							font-weight: 700;
							span {
							font-weight: 100;
						}
						}
					}
				}
			}
		} 
	}
</style>