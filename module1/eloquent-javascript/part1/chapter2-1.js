/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

for (let index = 1, letter='#'; index < 8; index++, letter+='#') {
    console.log(letter)
}
