import Image from "next/image";
import avatar from '../public/avatar.jpg'
import mem from '../public/mem.png'
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  Settings,
  FileText,
  Users,
  UserPlus,
  Heart,
  Mail,
  Link,
  Share2,
  Calendar,
  GalleryVerticalEnd,
  Files
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
        <main className="container mx-auto px-4 py-8 max-w-6xl">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 rounded-full flex items-center justify-center">
                            <Image src={avatar} alt="" className="rounded-full"></Image>
                        </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                          <h1 className="text-3xl font-bold text-gray-900">Виктория Шарова</h1>
                          <div className="flex items-center gap-2 mt-1">
                              <span className="text-lg text-gray-600">Веб-дизайнер</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-500">@sharova.v11</span>
                          </div>
                          <div className="text-gray-600 max-w-2xl">
                            <span>Создаю прикольные сайты и учусь программировать</span>
                          </div>

                          <Menubar className="mt-2">
                            <MenubarMenu>
                              <MenubarTrigger>Редактировать профиль</MenubarTrigger>
                              <MenubarContent>
                                <MenubarGroup>
                                  <MenubarItem>Изменить имя профиля</MenubarItem>
                                  <MenubarItem>Изменить никнейм</MenubarItem>
                                </MenubarGroup>
                                <MenubarSeparator />
                                <MenubarGroup>
                                  <MenubarItem>Изменить должность</MenubarItem>
                                  <MenubarItem>Изменить описание</MenubarItem>
                                </MenubarGroup>
                              </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                              <MenubarTrigger>Поделиться</MenubarTrigger>
                              <MenubarContent>
                                <MenubarGroup>
                                  <MenubarItem>Скопировать ссылку</MenubarItem>
                                  <MenubarItem>Отправить в личные сообщения</MenubarItem>
                                </MenubarGroup>
                              </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                              <MenubarTrigger>
                                <Settings />
                              </MenubarTrigger>
                              <MenubarContent>
                                <MenubarGroup>
                                  <MenubarItem>Настройки аккаунта</MenubarItem>
                                  <MenubarItem>Конфиденциальность</MenubarItem>
                                </MenubarGroup>
                              </MenubarContent>
                            </MenubarMenu>
                          </Menubar>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 pt-6 ">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                              <div className="p-2 bg-blue-100 rounded-lg">
                                <FileText className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900">43</div>
                                <div className="text-sm text-gray-600">Публикации</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                              <div className="p-2 bg-green-100 rounded-lg">
                                <Users className="w-5 h-5 text-green-600" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900">11.1K</div>
                                <div className="text-sm text-gray-600">Подписчики</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                              <div className="p-2 bg-purple-100 rounded-lg">
                                <UserPlus className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900">121</div>
                                <div className="text-sm text-gray-600">Подписки</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                              <div className="p-2 bg-pink-100 rounded-lg">
                                <Heart className="w-5 h-5 text-pink-600" />
                              </div>
                              <div>
                                <div className="text-2xl font-bold text-gray-900">53.8K</div>
                                <div className="text-sm text-gray-600">Лайки</div>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
                            <p className="text-3xl font-bold text-gray-900">О себе</p>
                          </div>
                          <div className="flex max-w-sm flex-col gap-4 text-sm mt-4">
                            <div className="flex flex-col gap-1.5">
                              <div className="leading-none font-medium">Веб-дизайнер и Frontend разработчик</div>
                              <div className="text-muted-foreground">
                                Стаж 5 лет
                              </div>
                            </div>
                            <Separator />
                            <div>
                              Опытный frontend разработчик с 5-летним стажем. Специализируюсь на создании 
                              современных веб-приложений с акцентом на производительность и пользовательский опыт. 
                              Активно участвую в open-source проектах и делюсь знаниями в своем блоге.
                            </div>
                            <div className="flex w-full flex-wrap gap-2">
                              <Badge>Frontend</Badge>
                              <Badge variant="secondary">Веб-дизайн</Badge>
                              <Badge variant="secondary">Next.js</Badge>
                              <Badge variant="outline">Middle</Badge>
                              <Badge variant="outline">Большой стаж</Badge>
                            </div>
                            <div className="flex gap-6 mt-4">
                              <div>
                                <Mail className="text-gray-600"/>
                                <span className="text-lg text-gray-600">sharova.v11@gmail.com</span>
                              </div>
                              <div>  
                                <Link className="text-gray-600"/>
                                <span className="text-lg text-gray-600">sharovafrontend.ru</span>
                              </div>
                              <div> 
                                <Share2 className="text-gray-600"/>
                                <span className="text-lg text-gray-600">@sharova.v11</span>
                              </div>
                              <div>
                                <Calendar className="text-gray-600"/>
                                <span className="text-lg text-gray-600">03.03.2026</span>
                              </div>
                            </div>
                            <Tabs defaultValue="account" className="w-[400px]">
                              <TabsList>
                                <TabsTrigger value="post">
                                  <FileText /> Все посты</TabsTrigger>
                                <TabsTrigger value="media">
                                  <GalleryVerticalEnd /> Медиа</TabsTrigger>
                                <TabsTrigger value="docs">
                                  <Files /> Документы</TabsTrigger>
                                <TabsTrigger value="heart">
                                  <Heart /> Избранное</TabsTrigger>
                              </TabsList>
                              <TabsContent value="post">"Представьте здесь много-много постов"</TabsContent>
                              <TabsContent value="media">
                                <Image src={mem} alt=""></Image>
                              </TabsContent>
                              <TabsContent value="docs">"Много документов"</TabsContent>
                              <TabsContent value="heart">"Много сохраненок"</TabsContent>
                            </Tabs>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
}
