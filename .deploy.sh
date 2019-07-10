

rm -rf .temp
mkdir .temp
cp -r ./* .temp/
cp ./.nojekyll .temp/.nojekyll
rm -rf ./.temp/.git
# gh-pages-clean && gh-pages -t -d ./.temp -b gh-pages -r https://wuyun1:wu950429@gitee.com/yunqiang_wu/frontend-train-201907-a-journal.git
gh-pages-clean && gh-pages -t -d ./.temp -b gh-pages -r https://6fd344b28ad84df425cdede14b500452d87cba33@github.com/yunqiangwu/frontend-train-201907-a-journal.git
# rm -rf .temp
