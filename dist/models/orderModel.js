"use strict";var mongoose=require("mongoose"),schema=mongoose.Schema({name:String,price:String,keyword:String,content:String,filepath:String,parent:String,isPlay:String,isRecevied:String,createTime:String}),orderModel=mongoose.model("orderModel",schema);