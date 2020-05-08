Mercado Liebre - Joaquin Girod
Hola, este ReadMe lo escribo con el objetivo de anticiparse a los errores que veran al analizar mis archivos, estos no son errores de funcionalidad ( a menos que haya subido mal la aplicacion ) sino errores de malas practicas. Entre ellos nos encontramos con:
. Comento muy poco el codigo, lo que lo hace muy poco legible para el resto
. No previ el tamaño del proyecto por lo que use nombres de variables muy poco escalables y por momentos absurdas
. Uso for y if para refabricar las funciones de filter y map en vez de usar estas mismas, principalmente por preferencia personal afectando negativamente la performance de la aplicacion
. Muchas hojas de estilos en vez de una sola unificada
. Los primeros HTMLS no hacen uso de scripts para agilizar la produccion de ciertos fragmentos de codigo. Esto se debe a que no habia aprendido a hacer eso en la primeras etapas del proyecto y despues de haberlo aprendido reacomodar el codigo para que funcionara con scripts era muy dificil. Esto lo hace por partes muy poco escalable.
.Incongruencia en estilos de CSS, esto se nota en las funcinalidades de administrador, principalmente por decision propia al estar un poco cansado de imitar

Planeo mejorar todas estas facetas en el proximo proyecto, mi mayor error fue no anticipar el tamaño del proyecto y subestimar la escalabilidad