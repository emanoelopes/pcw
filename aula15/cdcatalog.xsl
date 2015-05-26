<?xml version="1.0" encoding="ISO-8859-1"?>

<!-- A tag <xsl:stylesheet> define o início da folha de estilos. -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    
    <!-- 
    A tag <xsl:template> define o início de um molde. 
    O atributo match="/" associa (combina) o molde com a raiz (/) do documento XML de origem. 
    -->
    <xsl:template match="/">
        <!--
        O resto do documento contém o molde propriamente dito, exceto pelas duas 
        últimas linhas que definem o fim do molde e o fim da folha de estilos.
        -->
        <html>
            <body>
                <h2>Minha coleção de 26 CDs</h2>
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Títulos</th>
                        <th>Artistas</th>
                    </tr>
                    <!--
                    O elemento XSL <xsl:for-each> pode ser usado para selecionar 
                    todo elemento XML de um conjunto de nós específico
                    -->
                    <xsl:for-each select="catalog/cd">
                        <tr>
                            <td>
                                <xsl:value-of select="title"/>
                            </td>
                            <td>
                                <xsl:value-of select="artist"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
        
    </xsl:template>
</xsl:stylesheet>